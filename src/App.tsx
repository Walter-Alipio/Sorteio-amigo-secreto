import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuration from './Pages/Configuration';
import DrawNames from './Pages/DrawNames';

function App() {
	return (
		<BrowserRouter>
			<RecoilRoot>
				<Routes>
					<Route path='/' element={<Configuration />} />
					<Route path='/sorteio' element={<DrawNames />} />
				</Routes>
			</RecoilRoot>
		</BrowserRouter>
	);
}

export default App;
