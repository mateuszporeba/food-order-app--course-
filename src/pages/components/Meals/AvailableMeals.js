import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card.js';
import MealItem from './MealItem/MealItem';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get } from "firebase/database";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId
};
// const firebaseConfig = {

//   apiKey: "AIzaSyCqtYTkAScnMuqa8Z5e9Kz3zM3jexNWlBE",

//   authDomain: "food-order-app-f4dbd.firebaseapp.com",

//   databaseURL: "https://food-order-app-f4dbd-default-rtdb.europe-west1.firebasedatabase.app",

//   projectId: "food-order-app-f4dbd",

//   storageBucket: "food-order-app-f4dbd.appspot.com",

//   messagingSenderId: "477770992667",

//   appId: "1:477770992667:web:806a0c905356089a7c7cbe",

//   measurementId: "G-X5YVJTG872"

// };

// const app = initializeApp(firebaseConfig);
// initializeApp
// if (!initializeApp.length) {
//   const app = initializeApp(firebaseConfig);
// }




// Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);
//-----------------------//

//console.log(database);


const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];


const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, sethttpError] = useState(false);

  useEffect(() => {
    // const fetchMeals1 = async () => {
    //   const response = await fetch('https://food-order-app-f4dbd-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    //   const responseData = await response.json();
    //   console.log(responseData.m1);
    // }
    // fetchMeals1();

    const fetchMeals = async () => {
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const loadedMeals = [];
      const dbRef = ref(getDatabase());

      get(child(dbRef, 'mealss')).then((snapshot) => {
        if (snapshot.exists()) {
          const responseData = snapshot.val();
          for (const key in responseData) {
            loadedMeals.push({
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              price: responseData[key].price
            })
          }
          setMeals(loadedMeals);
          setIsLoading(false);
        } else {
          console.log("No data available");
          sethttpError(true);
        }
      }).catch((error) => {
        console.error(error);

      });
    };
    fetchMeals();
  }, [])

if(httpError){
  return (
    <section className={classes.httpError}>
   <p>Problem with connection to database</p>
  </section>
  )
}

  if (isLoading) {
    return (
      <section>
        <div class={classes['lds-roller']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </section>
    )
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
};
export default AvailableMeals;