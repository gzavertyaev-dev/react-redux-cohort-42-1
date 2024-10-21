export interface FeedbackProps {
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
  resetResults: () => void;
}
