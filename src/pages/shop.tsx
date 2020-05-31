import React, { SyntheticEvent, useState, useEffect } from "react";
import Navigation from "../components/navigation/navigation";
import Filter from "../components/filter/filter";
import Footer from "../components/footer/footer";
import Container from "../components/container/container";
import Card from "../components/card/card";
import shopStyle from "./shopStyle.module.scss";
import phones from "../images/images";

interface phones {
  src: string;
  alt: string;
  id: number;
  brand: string;
  price: number;
}

const Shop = () => {
  const filterArray = (name: string) => {
    return phones.filter((phone) => phone.brand === name);
  };

  const [samsung, setSamsung] = useState(false);
  const [apple, setApple] = useState(false);
  const [lg, setLg] = useState(false);
  const [motorola, setMotorola] = useState(false);
  const [google, setGoogle] = useState(false);
  const [huawei, setHuawei] = useState(false);
  const [sonim, setSonim] = useState(false);
  const [phonesArr, setPhonesArr] = useState(phones);
  let newArr: phones[] = [];

  const filterBrand = (e: SyntheticEvent) => {
    let target = e.target as HTMLInputElement;

    switch (target.name) {
      case "samsung":
        setSamsung(!samsung);
        break;
      case "apple":
        setApple(!apple);
        break;
      case "lg":
        setLg(!lg);
        break;
      case "sonim":
        setSonim(!sonim);
        break;
      case "google":
        setGoogle(!google);
        break;
      case "motorola":
        setMotorola(!motorola);
        break;
      case "huawei":
        setHuawei(!huawei);
        break;
    }
  };
  useEffect(() => {
    const trueCheck: boolean[] = [
      samsung,
      apple,
      lg,
      motorola,
      huawei,
      sonim,
      google,
    ];
    if (samsung) {
      newArr.push(...filterArray("samsung"));
    } else {
      newArr.filter((phone) => phone.brand !== "samsung");
    }
    if (apple) {
      newArr.push(...filterArray("apple"));
    } else {
      newArr.filter((phone) => phone.brand !== "apple");
    }
    if (lg) {
      newArr.push(...filterArray("lg"));
    } else {
      newArr.filter((phone) => phone.brand !== "lg");
    }
    if (sonim) {
      newArr.push(...filterArray("sonim"));
    } else {
      newArr.filter((phone) => phone.brand !== "sonim");
    }
    if (google) {
      newArr.push(...filterArray("google"));
    } else {
      newArr.filter((phone) => phone.brand !== "google");
    }
    if (motorola) {
      newArr.push(...filterArray("motorola"));
    } else {
      newArr.filter((phone) => phone.brand !== "motorola");
    }
    if (huawei) {
      newArr.push(...filterArray("huawei"));
    } else {
      newArr.filter((phone) => phone.brand !== "huawei");
    }

    if (trueCheck.some((brand: boolean) => brand)) {
      setPhonesArr(newArr);
    } else {
      setPhonesArr(phones);
    }
  }, [samsung, apple, google, motorola, lg, sonim, huawei]);

  return (
    <div>
      <Navigation />
      <Container>
        <div className={shopStyle.leftColumn}>
          <Filter brand={filterBrand} />
        </div>
        <div className={shopStyle.rightColumn}>
          <ul>
            {phonesArr.map((phone) => {
              return (
                <li key={phone.id}>
                  <Card image={phone.src} alt={phone.alt} price={phone.price} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
