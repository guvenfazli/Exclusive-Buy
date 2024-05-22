import classes from "./loading.module.css"
export default function Loading() {
  return (
    <div className="flex w-full justify-center items-center">
      <span className={classes.loader}></span>
    </div>
  )
}