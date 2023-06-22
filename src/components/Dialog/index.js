import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import Aos from "aos";
 
export default function Modals(props) {

  const [valueMineral, setValueMineral] = useState(0);
  const [valueSusu, setValueSusu] = useState(0);
  const [valueSnack, setValueSnack] = useState(0);
  const [valuePopice, setValuePopice] = useState(0);
  const [valuePecinta, setValuePecinta] = useState(0);
  const [result, setResult] = useState(0);
  const [jawaban, setJawaban] = useState('');

  const handleClick = () => {
    let resultt, jawabann;
    resultt = (valueMineral + valueSusu + valueSnack + valuePopice + valuePecinta) * 2
    setResult(resultt) 
    switch(resultt) {
      case 20 :
        jawabann = "ternyata kamu nggak tau fav nya ya?"
        break;
      case 40 :
        jawabann = "masak cuma bener dua sihhhhhh ga asikkk"
        break
      case 60 :
        jawabann = "ternyata keren juga kamu lumayannnnnn"
        break
      case 80 :
        jawabann = "wihhh keren lohhh cuma salah satu doangggg"
        break
      case 100 :
        jawabann = "kokkkk, kokkk bisa bener semua!! maem e opo ? <3"
        break
    }
    setJawaban(jawabann)
  }



  const mineral = [
    {
      nama : "Aqua",
      value : 10
    },
    {
      nama : "Le Minarale",
      value : 0
    },
    {
      nama : "Cleo",
      value : 0
    },
    {
      nama : "Ades",
      value : 0
    },

  ]

  const susu = [
    {
      nama : "Strawbery",
      value : 0
    },
    {
      nama : "Taro",
      value : 10
    },
    {
      nama : "Chocolate",
      value : 0
    },
    {
      nama : "Caramel",
      value : 0
    },

  ]

  const snack = [
    {
      nama : "PotaBee",
      value : 10
    },
    {
      nama : "Chitato",
      value : 0
    },
    {
      nama : "Kusuka",
      value : 0
    },
    {
      nama : "Ganja",
      value : 0
    },

  ]

  const popice = [
    {
      nama : "Mangga",
      value : 0
    },
    {
      nama : "Taro",
      value : 0
    },
    {
      nama : "Permen Karet",
      value : 0
    },
    {
      nama : "Alvocado",
      value : 10
    },

  ]

  const pecinta = [
    {
      nama : "Autophile",
      value : 0
    },
    {
      nama : "Astrophile",
      value : 10
    },
    {
      nama : "Selenophile",
      value : 0
    },
    {
      nama : "Pluviophile",
      value : 0
    },

  ]

  
  
  
  return (
    <Fragment>
      <div className="flex justify-center md:justify-start">
        <Button onClick={props.method} variant="outlined" color="light-green">
          Mulai tebak
        </Button>
      </div>
      <Dialog open={props.open} handler={props.method}>
        <DialogHeader>Tebak favorite lendy</DialogHeader>
        <DialogBody divider className="overflow-y-scroll h-[25rem] md:h-full">
          <Typography>
            <div className="flex flex-col gap-5 text-sm">
              <div>   
                <h3>suka air mineral apa?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {mineral.map((item, index) => (
                    <label className="m-2 text-sm" key={index}>
                      <input name="mineral" onChange={(e) => setValueMineral(parseInt(e.target.value))} className="mx-1" value={item.value} type="radio" /> 
                      {item.nama}
                    </label>
                  ))}
                </div>
              </div>
              <div>   
                <h3>kalau beli susu ultramilk rasa apa? (pasti tau semua sih)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {susu.map((item, index) => (
                    <label className="m-2 text-sm" key={index}>
                      <input name="susu" onChange={(e) => setValueSusu(parseInt(e.target.value))} className="mx-1" value={item.value} type="radio" /> 
                      {item.nama}
                    </label>
                  ))}
                </div>
              </div>
              <div>   
                <h3>kalau beli snack rasa bbq pasti beli?</h3>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {snack.map((item, index) => (
                    <label className="m-2 text-sm" key={index}>
                      <input name="snack" onChange={(e) => setValueSnack(parseInt(e.target.value))} className="mx-1" value={item.value} type="radio" /> 
                      {item.nama}
                    </label>
                  ))}
                </div>
              </div>
              <div>   
                <h3>kalau beli pop ice sih pasti banyak yang nggak tau beli rasa apa? wkwkwkwk</h3>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {popice.map((item, index) => (
                    <label className="m-2 text-sm" key={index}>
                      <input name="popice" onChange={(e) => setValuePopice(parseInt(e.target.value))} className="mx-1" value={item.value} type="radio" /> 
                      {item.nama}
                    </label>
                  ))}
                </div>
              </div>
              <div>   
                <h3>kalau tentang phile pasti udah tau semua sih wong ditaro di bio ig wwkkwkw</h3>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {pecinta.map((item, index) => (
                    <label className="m-2 text-sm" key={index}>
                      <input name="pecinta" onChange={(e) => setValuePecinta(parseInt(e.target.value))} className="mx-1" value={item.value} type="radio" /> 
                      {item.nama}
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button color="green" onClick={handleClick} >Check</Button> 
              </div>
              <div className="text-center">
                <p className="text-xl">Nilai kamu : <span className="text-green-500 font-semibold">{result}</span> <br /> <span className="font-semibold">{jawaban}</span> </p>
              </div>
            </div>
          </Typography>

        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="text"
            color="red"
            onClick={props.method}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}