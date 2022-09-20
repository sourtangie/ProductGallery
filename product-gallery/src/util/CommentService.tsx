import { CommentObject } from "../types/types";

export const placeComment = (comment: CommentObject, itemID: string) => {
  const currentCommentsString = localStorage.getItem("comments-" + itemID);
  if (currentCommentsString) {
    let currentComments = [];
    currentComments = JSON.parse(currentCommentsString);
    console.log(currentComments);
    const newComments = currentComments.concat(comment);
    console.log(newComments);
    localStorage.setItem("comments-" + itemID, JSON.stringify(newComments));
  } else {
    let newComments = [comment];
    localStorage.setItem("comments-" + itemID, JSON.stringify(newComments));
  }
};

export const getComments = (itemID: string) => {
  const fetchedComments = localStorage.getItem("comments-" + itemID);
  return fetchedComments;
};
