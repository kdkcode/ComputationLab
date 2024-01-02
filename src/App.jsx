import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Imagebody from './Components/Body/ImageBody/Imagebody';
import News from './Components/Body/News/News';
import SeeMore from './Components/Body/SeeMore/SeeMore';
import './index.css';
import Imageintroduction from './Components/Body/ImageIntroduction/Imagebody';
import Newsintroduction from './Components/Body/NewsIntroduction/News';
import ImageMemebers from './Components/Body/ImageMembers/Imagebody';
import MembersComponent from './Components/Body/MemberPage/MembersComponent';
import ImageResearch from './Components/Body/ImageResearch/Imagebody';
import ResearchComponent from './Components/Body/ResearchPage/ResearchComponents';
import ImagePublication from './Components/Body/ImagePublication/Imagebody';
import PublicationsComponent from './Components/Body/PublicationPage/PublicationsComponent';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path="/" element={
              <>
                <Imagebody/>
                <News/>
                <SeeMore/>
              </>
            }/>
            <Route path="/home" element={
              <>
                <Imagebody/>
                <News/>
                <SeeMore/>
                
              </>
            }/>
            <Route path="/introduction" element={
              <>
                <Imageintroduction/>
                <Newsintroduction/>
              </>
            }/>
            <Route path="/members" element={
              <>
                <ImageMemebers/>
                <MembersComponent/>
                
              </>
            }/>
            <Route path="/research" element={
              <>
                <ImageResearch/>
                <ResearchComponent/>
                
              </>
            }/>

            <Route path="/publication" element={
              <>
                <ImagePublication/>
                <PublicationsComponent/>
                
              </>
            }/>


            {/* 추가적인 라우트 경로 및 컴포넌트 */}
          </Routes>
        </div>
        <footer className='footer'>
          <Footer/>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
