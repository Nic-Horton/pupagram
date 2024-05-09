import { useState } from 'react';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import {
	addDoc,
	arrayUnion,
	collection,
	doc,
	updateDoc,
} from 'firebase/firestore';
import { firestore } from '../firebase/firebase';
import usePostStore from '../store/postStore';

const usePostComment = () => {
	const [isCommenting, setIsCommenting] = useState(false);
	const showToast = useShowToast();
	const authUser = useAuthStore((state) => state.user);
	const addComment = usePostStore((state) => state.addComment);

	const handlePostComment = async (postId, comment) => {
		if (isCommenting) return;
		if (!authUser)
			return showToast('Error', 'You must be logged in to comment', 'error');

		setIsCommenting(true);
		const newComment = {
			comment,
			createdAt: Date.now(),
			createdBy: authUser.uid,
			postId,
		};

		try {
			const commentRef = await addDoc(
				collection(firestore, 'comments'),
				newComment
			);

			await updateDoc(doc(firestore, 'posts', postId), {
				comments: arrayUnion({ ...newComment, id: commentRef.id }),
			});

			addComment(postId, { ...newComment, id: commentRef.id });
		} catch (error) {
			showToast('Error', error.message, 'error');
		} finally {
			setIsCommenting(false);
		}
	};

	return { isCommenting, handlePostComment };
};

export default usePostComment;
