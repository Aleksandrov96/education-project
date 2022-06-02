import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from '../pages/TestPage/TestPage';
import TestEdit from '../pages/TestPage/TestSetup/TestEdit';
import CoursePage from '../pages/CoursePage/CoursePage';
import Main from '../pages/Main/Main';
import Courses from '../pages/Courses/Courses';
import SignInForm from '../pages/SignInForm/SignInForm';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import NoMatchPage from '../pages/NoMatchPage/NoMatchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="main" element={<Main />} />
          <Route path="courses" element={<Courses />} />
          <Route path="*" element={<NoMatchPage />} />
          <Route path="courses/:courseId" element={<CoursePage />} />
          <Route path="courses/:courseId/tests" element={<TestPage />} />
          <Route path="courses/:courseId/tests/edit" element={<TestEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
