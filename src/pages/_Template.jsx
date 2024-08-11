import { Outlet } from "react-router-dom"; // Import Outlet from react-router-dom to render nested routes
import Footer from "../components/Footer"; // Import the Footer component to be used in this layout

// Define and export the Template component
export default function Template() {
    return (
        <>
            <Outlet /> {/* Render the nested routes here; child routes will be displayed in this spot */}
            <Footer /> {/* Render the Footer component below the nested routes */}
        </>
    );
}
