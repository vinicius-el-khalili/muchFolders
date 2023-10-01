import style from "@/sass/pages/Home.module.scss"

export default function Home() {
  return (
    <>
    <div className={style.Home}>
      <div>


        <div>
          <h3>Welcome to</h3>
          <h1>
            /muchFolders
          </h1>
          <br />
          <p>My personal Next.js initial setup</p>
        </div>
        
        <br />
        <br />
        
        <div className={style.list}>     

          <p>Customization</p>
          <p>Consistency</p>
          <p>Reusability</p>
          <p>Efficiency</p>
          <p>Growth</p>
          
        </div>

      </div>
    </div>
    </>
  )
}
