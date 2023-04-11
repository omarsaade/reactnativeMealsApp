import React, {useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId; //c1
  //   [{id,categoryid,..} , {} , {}]
  // const displayedMeals = MEALS.filter(mealItem => {
  //   return mealItem.categoryIds.indexOf(catId) >= 0;
  // });
  // Here is more simple way of filtering meals because meal.categoryIds is array
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  // it will run at the same time and before the component finish execution
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
