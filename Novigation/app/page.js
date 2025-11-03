"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchparams =  useSearchParams()
  return (
    <div> 
      hey this our page and blog is {searchparams.get('blog')} and utm source is {searchparams.get('utm_source')}
    </div>
  );
}
