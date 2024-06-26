import { useEffect, useRef } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  CategoriesFieldset,
  CategoryDiv,
  CategoryLabel,
  // CategoryInput,
} from './ExercisesCategories.styled';

import { EXERCISES_CATEGORY } from 'src/utils/constants';

export default function ExercisesCategories({ category }) {
  const path = useResolvedPath();
  const navigate = useNavigate();
  const currentPathNameRef = useRef(path.pathname);

  useEffect(() => {
    if (currentPathNameRef.current !== '/exercises') {
      navigate('./');
    }
  }, [category, navigate]);

  useEffect(() => {
    currentPathNameRef.current = path.pathname;
  }, [path.pathname]);

  // To check input value
  // const handleOptionChange = event => {
  //   setCategory(event.target.value);
  // };

  return (
    <CategoriesFieldset>
      <CategoryDiv>
        <CategoryLabel selected={category === EXERCISES_CATEGORY.BODY_PARTS}>
          {/* <CategoryInput
            type="radio"
            value={EXERCISES_CATEGORY.BODY_PARTS}
            checked={category === EXERCISES_CATEGORY.BODY_PARTS}
            onChange={handleOptionChange}
          /> */}
          Body parts
        </CategoryLabel>
      </CategoryDiv>

     
    </CategoriesFieldset>
  );
}

ExercisesCategories.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};
