import * as z from "zod";

export const ThreadValidation = z.object({
  thread: 
    z.string().nonempty().min(3, 
    { message: "Minimum 3 characters." }),
  accountId: z.string(),
});

export const CommentValidation = z.object({
  thread: 
    z.string().nonempty().min(3, 
    { message: "Minimum 3 characters." }),
});

export const LikeValidation = z.string().regex(
  /^.*liked your post.*$/,
  { message: "Label must contain 'liked your post'." }
);