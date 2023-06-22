import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import { Option } from "@material-tailwind/react";
import { useRouter } from "next/router";
 
export default function Greeting() {
  const [open, setOpen] = useState(false);
  const [day, setDay] = useState("")
  const [absen, setAbsen] = useState("")
  const [telp, setTelp] = useState("");
  const router = useRouter()
  console.log(day)

  const handleClick = () => {
    if(day == "3" && absen == 20 && telp == "0958") {
      router.replace("/greeting")
    }
    else {
      alert("Yah salah coba lagi yukk <3");
    }
  }
 
  const handleOpen = () => setOpen(!open);

  const hari = [
    {
      day : "Senin",
      value: "1"
    },
    {
      day : "Selasa",
      value: "2"
    },
    {
      day : "Rabu",
      value: "3"
    },
    {
      day : "Kamis",
      value: "4"
    },
    {
      day : "Jumat",
      value: "5"
    },
    {
      day : "Sabtu",
      value: "6"
    },
    {
      day : "Minggu",
      value: "7"
    },
  ]
 
  return (
    <Fragment>
      <Button onClick={handleOpen} variant="outlined" color="red">
        Lihat Ucapan
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>ISI DULU BARU BISA LIAT</DialogHeader>
        <DialogBody divider>
          <div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <div className="w-72">
                <Select onChange={(result) => setDay(result)} value={day} label="Hari apa lendy lahir">
                  {hari.map((items, index) => (
                    <Option key={index} value={items.value}>{items.day}</Option>
                  ))}
                </Select>
              </div>
              <div className="w-72">
                <Input value={absen} onChange={(e) => setAbsen(e.target.value)} type="number" label="Absen Berapa waktu SMA" />
              </div>
              <div className="w-72">
              <Input type="text" onChange={(e) => setTelp(e.target.value)} label="4 digit terakhir no wa yang baru" />
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleClick}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}