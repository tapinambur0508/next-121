// // Basic
// import Link from "next/link";

// function NotFound() {
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//       <p>Sorry, the page you are looking for does not exist.</p>
//       <Link href="/">Go home</Link>
//     </div>
//   )
// }

// Interactive
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timerId = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [router]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>You will be redirect to home page after several seconds...</p>
    </div>
  );
}

export default NotFound;
