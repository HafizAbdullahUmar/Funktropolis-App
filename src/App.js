import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./assests/NavbarAssests/Funk2.png";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ConnectWallet from "./components/ConnectWallet";
import CreateNFTs from "./components/CreateNFTs";
import ScrollToTop from "./components/ScrollToTop";
import Collections from "./components/Collections";
import NFTCollections from "./components/NFTCollections";
import DiscoverNFTs from "./components/DiscoverNFTs";
import Artist from "./components/Artist";
import ProfileSettings from "./components/ProfileSettings";
import NFTArtist from "./components/NFTArtist";
function App() {
  return (
    <>
      <Router>
        <div style={{ width: "100%", overflow: "hidden" }}>
          <ScrollToTop />
          <Navbar Logo={Logo} />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route
              path="/profile-settings"
              element={<ProfileSettings />}
            ></Route>
            <Route path="/connect-wallet" element={<ConnectWallet />}></Route>
            <Route path="/create-nfts" element={<CreateNFTs />}></Route>
            <Route path="/nft-collections" element={<NFTCollections />}></Route>
            <Route path="/collections" element={<Collections />}></Route>
            <Route path="/discover-nfts" element={<DiscoverNFTs />}></Route>
            <Route path="/profile" element={<Artist />}></Route>
            <Route path="/artist" element={<NFTArtist />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
