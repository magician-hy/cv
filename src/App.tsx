import Info from './components/Info';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import './App.less';
import mock from './mock.ts';

function App() {
  return (
    <div className="page-container">
      <Info info={mock.info} />
      <Skills skills={mock.skills} />
      <Experiences experiences={mock.experiences} />
      <Projects projects={mock.projects} />
    </div>
  );
}

export default App;
