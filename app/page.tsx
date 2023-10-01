import style from "@/sass/pages/Home.module.scss"

export default function Home() {
  return (
    <main
    style={{

      display:"grid",
      placeItems:"center",
      height:"100%",
      width:"100%"
      
    }}>


      <h1 className={style.test}>
        Test
      </h1>

      <h1 className={style.test2}>
        Test
      </h1>

      <div
      style={{

        position:"absolute",
        left:"0",
        bottom:"0",
        width:"100%",
        height:"1rem",
        backgroundColor:"#252525",
        color:"white",
        textAlign:"center"

      }}/>


    </main>
  )
}
