import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 pt-20">
      <h1>Blog Page Listing</h1>
      <Link href="./blog/my-first-ever-blog">
        <Button>Visit My First Blog</Button>
      </Link>
    </div>
  )
}