'use client'
import { useEffect } from "react";


async function upload(){
  try {
    const result = await uploadData({
      key: filename,
      data: file,
      options: {
        accessLevel: 'guest', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
        onProgress // Optional progress callback.
      }
    }).result;
    console.log('Succeeded: ', result);
  } catch (error) {
    console.log('Error : ', error);
  }
}
export default function Home() {
  useEffect(()=> {
    console.log("Woking")
  },[])
  return (
    <button>
      Click me
    </button>
  )
}
function uploadData(arg0: {
  key: any; data: any; options: {
    accessLevel: string; // defaults to `guest` but can be 'private' | 'protected' | 'guest'
    onProgress: any; // Optional progress callback.
  };
}) {
  throw new Error("Function not implemented.");
}

