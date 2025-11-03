import { submitAction } from "@/actions/form";
import { useRef } from "react";
export default function Home() {
  let ref = useRef()
  return (
    <div className="w-2 mx-auto my-12">
      <form ref={ref} action={(e)=> {submitAction(e); ref.current.reset()}}>
        <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="bg-white text-black" />
        </div>
        <div>
        <label htmlFor="add">Address</label>
        <input type="text" name="add" id="add" className="bg-white text-black" />
        </div>

        <div>
        <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
