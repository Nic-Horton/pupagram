import { useEffect, useState } from 'react';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import useUserProfileStore from '../store/userProfileStore';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';

const useFollowUser = (userId) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const [isFollowing, setIsFollowing] = useState(false);
	const { user, setUser } = useAuthStore();
	const { userProfile, setUserProfile } = useUserProfileStore();
	const showToast = useShowToast();

	const handleFollowUser = async () => {
		setIsUpdating(true);
		try {
			const currentUserRef = doc(firestore, 'users', user.uid);
			const userToFollowOrUnfollowRef = doc(firestore, 'users', userId);

			await updateDoc(currentUserRef, {
				following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
			});

			await updateDoc(userToFollowOrUnfollowRef, {
				followers: isFollowing ? arrayRemove(user.uid) : arrayUnion(user.uid),
			});

			if (isFollowing) {
				//Unfollow
				setUser({
					...user,
					following: user.following.filter((uid) => uid !== userId),
				});

				if (userProfile) {
					setUserProfile({
						...userProfile,
						followers: userProfile.followers.filter((uid) => uid !== user.uid),
					});
				}

				localStorage.setItem(
					'user-info',
					JSON.stringify({
						...user,
						following: user.following.filter((uid) => uid !== userId),
					})
				);
				setIsFollowing(false);
			} else {
				//Follow
				setUser({
					...user,
					following: [...user.following, userId],
				});

				if (userProfile) {
					setUserProfile({
						...userProfile,
						followers: [...userProfile.followers, user.uid],
					});
				}

				localStorage.setItem(
					'user-info',
					JSON.stringify({
						...user,
						following: [...user.following, userId],
					})
				);
				setIsFollowing(true);
			}
		} catch (error) {
			showToast('Error', error.message, 'error');
		} finally {
			setIsUpdating(false);
		}
	};

	useEffect(() => {
		if (user) {
			const isFollowing = user.following.includes(userId);
			setIsFollowing(isFollowing);
		}
	}, [user, userId]);

	return { isUpdating, isFollowing, handleFollowUser };
};

export default useFollowUser;
