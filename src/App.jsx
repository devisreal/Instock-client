import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import InventoriesPage from "./pages/InventoriesPage/InventoriesPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/warehouses" />} />
				<Route path="/warehouses" element={<WarehousesPage />} />
				<Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
				<Route path="/warehouses/:id/edit" element={<EditWarehousePage />} />
				<Route path="/warehouses/add" element={<AddWarehousePage />} />
				<Route path="/inventories" element={<InventoriesPage />} />
				<Route path="/inventories/:id" element={<InventoryDetailsPage />} />
				<Route path="/inventories/:id//edit" element={<EditInventoryPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
