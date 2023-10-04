"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread } from "@/lib/actions/thread.actions";

interface Props {
    threadId: string;
    currentUserImg: string;
    currentUserId: string;
}

const Tag = ({threadId, currentUserImg, currentUserId}: Props) => {
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(CommentValidation),
        defaultValues: {
            thread: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
        await addCommentToThread(
            threadId,
            values.thread,
            JSON.parse(currentUserId),
            pathname
        );
      
        form.reset();
    };


    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="comment-form"
            >
                <FormField
                    control={form.control}
                    name="thread"
                    render={({ field }) => (
                        <FormItem className='flex w-full items-center gap-3'>
                            <FormLabel>
                                <Image 
                                    src={currentUserImg}
                                    alt="Profile Image"
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover"
                                />
                            </FormLabel>
                            <FormControl className="border-none bg-transparent">
                                {/* <Input
                                    type="text"
                                    placeholder="Like..."
                                    className="no-focus text-light-1 outline-none"
                                    {...field}
                                /> */}
                                <FormLabel
                                    className="text-white"
                                >
                                    <>liked your post</>
                                </FormLabel>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="comment-form_btn">
                    Tag
                </Button>       
            </form>
        </Form>
 )
}

export default Tag;