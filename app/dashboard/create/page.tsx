import { createPost } from '@/app/actions';
import SubmitButton from '@/components/generals/SubmitButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea';
import React from 'react'

const CreatePost = () => {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Post</CardTitle>
          <CardDescription className="text-muted-foreground text-lg">
            Write your post here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createPost} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-semibold">Title</Label>
              <Input
                type="text"
                name="title"
                className="text-lg"
                placeholder="Title"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-semibold">Content</Label>
              <Textarea
                name="content"
                className="text-lg"
                placeholder="Content"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-lg font-semibold">Image Url</Label>
              <Input
                type="url"
                name="imageUrl"
                className="text-lg"
                placeholder="Image Url"
                required
              />
            </div>
            <SubmitButton/>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreatePost