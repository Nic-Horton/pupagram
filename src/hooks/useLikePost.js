import { useState } from 'react';
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import usePostStore from '../store/postStore';

const useLikePost = (post) => {
	const [isUpdating, setIsUpdating] = useState(false);
	const authUser = useAuthStore((state) => state.user);
	const updateLikes = usePostStore((state) => state.updateLikes);
	const isLiked = post.likes.includes(authUser?.uid);
	const likes = post.likes.length;
	const showToast = useShowToast();

	const handleLikePost = async () => {
		if (isUpdating) return;
		if (!authUser)
			return showToast(
				'Error',
				'You must be logged in to like a post',
				'error'
			);
		setIsUpdating(true);

		try {
			const postRef = doc(firestore, 'posts', post.id);
			await updateDoc(postRef, {
				likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
			});

			updateLikes(post.id, !isLiked, authUser.uid);
		} catch (error) {
			showToast('Error', error.message, 'error');
		} finally {
			setIsUpdating(false);
		}
	};

	return { isLiked, likes, handleLikePost, isUpdating };
};

export default useLikePost;
