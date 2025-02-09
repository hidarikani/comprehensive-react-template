import clsx from "clsx";
// import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import World from "./features/world/World";
import logo from "./assets/logo.svg";
import "./index.css";

const headerBaseCls = [
  "col-start-1",
  "col-span-12",
  "row-start-1",
  "row-span-1",
  "bg-green-200",
  "p-4",
  "flex",
  "items-center",
];

const headerLgCls = ["lg:col-span-4"];
const headerXlCls = ["xl:col-start-2"];
const header2xlCls = ["2xl:col-start-3", "2xl:col-span-2"];
const headerCls = clsx(headerBaseCls, headerLgCls, headerXlCls, header2xlCls);

const navBaseCls = [
  "relative",
  "z-10",
  "col-start-1",
  "col-span-10",
  "row-start-2",
  "row-span-2",
  "bg-orange-200",
  "p-4",
];

const navSmCls = ["sm:col-start-1", "sm:col-span-8"];
const navLgCls = ["static", "lg:col-start-1", "lg:col-span-4"];
const navXlCls = ["xl:col-start-2"];
const nav2xlCls = ["2xl:col-start-3", "2xl:col-span-2"];
const navCls = clsx(navBaseCls, navSmCls, navLgCls, navXlCls, nav2xlCls);

const navOverlayBaseCls = [
  "col-start-1",
  "col-span-12",
  "row-start-2",
  "row-span-2",
  "bg-black",
  "bg-opacity-50",
  "backdrop-filter",
  "backdrop-blur-sm",
];

const navOverlayLgCls = ["lg:hidden"];
const navOverlayCls = clsx(navOverlayBaseCls, navOverlayLgCls);

const mainBaseCls = [
  "col-start-1",
  "col-span-12",
  "row-start-2",
  "row-span-2",
  "bg-blue-200",
  "p-4",
  "flex",
  "flex-col",
  "gap-4",
];

const mainLgCls = [
  "lg:col-start-5",
  "lg:col-span-8",
  "lg:row-start-1",
  "lg:row-span-3",
];

const mainXlCls = ["xl:col-start-6", "xl:col-span-6"];
const main2xlCls = ["2xl:col-start-5", "2xl:col-span-5"];
const mainCls = clsx(mainBaseCls, mainLgCls, mainXlCls, main2xlCls);

function App() {
  return (
    <>
      <header className={headerCls}>
        <img src={logo} alt="Your App Logo" className="h-12 w-auto" />
        <h1 className="text-2xl ml-4">Your App Name</h1>
      </header>
      <nav className={navCls}>
        <span>Nav</span>
      </nav>
      <div className={navOverlayCls}></div>
      <main className={mainCls}>
        <Counter />
        <World className="grow" />
      </main>
      <div className="fixed bottom-0 right-0 m-4 z-50 p-3 bg-blue-500 text-white rounded-lg shadow-lg">
        <span>Base </span>
        <span className="invisible sm:visible">SM </span>
        <span className="invisible md:visible">MD </span>
        <span className="invisible lg:visible">LG </span>
        <span className="invisible xl:visible">XL </span>
        <span className="invisible 2xl:visible">2XL </span>
      </div>
    </>
  );
}

export default App;
