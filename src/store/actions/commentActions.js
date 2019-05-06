export const createComment = comment => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    firestore
      .collection("comments")
      .add({
        ...comment,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        initials: profile.firstName[0] + profile.lastName[0],
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_COMMENT", comment });
      })
      .catch(err => {
        dispatch({ type: "CREATE_COMMENT_ERROR", err });
      });
  };
};
