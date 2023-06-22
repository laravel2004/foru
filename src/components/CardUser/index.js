import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
 
export default function CardUser(props) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <Image src={props.src} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {props.jabatan}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <TypewriterComponent
          options={{
            strings :  ['"Pengen Hot Wheels"', '"Ice Cream Boleh?"', '"Taro Taro Taro"'],
            autoStart : true,
            loop : true
          }}
        />
      </CardFooter>
    </Card>
  );
}