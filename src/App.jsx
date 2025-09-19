import CreatingComponents from "./components/QuickStart/CreatingComponents.jsx";
import DisplayData from "./components/QuickStart/DisplayData.jsx";
import EventHandler from "./components/QuickStart/EventHandler.jsx";
import RenderingList from "./components/QuickStart/RenderingList.jsx";
import SharingData from "./components/QuickStart/SharingData.jsx";
import UpdatingScreen from "./components/QuickStart/UpdatingScreen.jsx";

import Game from "./components/TicTacToe/TicTacToe.jsx";

import FilterProductTable from "./components/ThinkingInReact/FilterProductTable.jsx";

import TodoList from "./components/DescribingTheUI/ToDoList.jsx";
import TeaSet from "./components/DescribingTheUI/TeaSet.jsx";
import Gallery from "./components/DescribingTheUI/Gallery.jsx";
import Avatar from "./components/DescribingTheUI/Avatar.jsx";
import PackingList from "./components/DescribingTheUI/PackingList.jsx";
import GalleryText from "./components/DescribingTheUI/GaleryText.jsx";
import Form from "./components/DescribingTheUI/Form.jsx";
import Toolbar from "./components/DescribingTheUI/ToolBar.jsx";
import FormTwo from "./components/DescribingTheUI/FormTwo.jsx";

function App() {

  return (
    <>
        <CreatingComponents />
        <DisplayData />
        <EventHandler />
        <RenderingList />
        <SharingData/>
        <UpdatingScreen />

        <Game />
        <FilterProductTable/>
        <TodoList />
        <TeaSet/>
        <Gallery/>
        <Avatar/>
        <PackingList/>
        <GalleryText/>
        <Form/>
        <Toolbar/>
        <FormTwo/>
    </>
  )
}

export default App
