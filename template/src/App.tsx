// import { Grid, Flex, View } from "@adobe/react-spectrum";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <>
      <header className="h-12 col-start-1 col-span-12 row-start-1 row-span-1 lg:col-span-4 bg-green-200">
        <h1>Your App Name</h1>
      </header>
      <nav className="relative z-10 col-start-1 col-span-11 row-start-2 row-span-2 bg-orange-200">
        <span>Nav</span>
      </nav>
      <main className="col-start-1 col-span-12 row-start-2 row-span-2 sm:col-span-10 md:col-span-10 lg:col-span-8 xl:col-span-6 2xl:col-span-4 bg-blue-200 ">
        <span>Main</span>
      </main>
      <div className="fixed bottom-0 right-0 m-4 z-50 p-3 bg-blue-500 text-white rounded-lg shadow-lg">
        <span className="invisible sm:visible">SM </span>
        <span className="invisible md:visible">MD </span>
        <span className="invisible lg:visible">LG </span>
        <span className="invisible xl:visible">XL </span>
        <span className="invisible 2xl:visible">2XL </span>
      </div>
    </>

    // <Grid
    //   areas={{
    //     base: ["header", "nav", "content", "footer"],
    //     M: [
    //       "header   header",
    //       "nav      content",
    //       "nav      content",
    //       "footer   footer",
    //     ],
    //     L: [
    //       "header header  header",
    //       "nav    content toc",
    //       "nav    content toc",
    //       "footer footer  footer",
    //     ],
    //   }}
    //   columns={{
    //     M: ["size-2000", "1fr"],
    //     L: ["size-2000", "1fr", "size-2000"],
    //   }}
    //   gap="size-100"
    // >
    //   <View backgroundColor="gray-200" gridArea="header" minHeight="size-1000">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </View>
    //   <View backgroundColor="gray-200" gridArea="nav" minHeight="size-1000">
    //     <Flex
    //       direction={{ base: "row", M: "column" }}
    //       gap="size-100"
    //       margin="size-100"
    //     >
    //       <View
    //         backgroundColor="static-gray-50"
    //         height="size-250"
    //         minWidth="size-900"
    //       />
    //       <View
    //         backgroundColor="static-gray-50"
    //         height="size-250"
    //         minWidth="size-900"
    //       />
    //       <View
    //         backgroundColor="static-gray-50"
    //         height="size-250"
    //         minWidth="size-900"
    //       />
    //     </Flex>
    //   </View>
    //   <View gridArea="content" minHeight="size-1000">
    //     <Counter />
    //   </View>
    //   <View
    //     backgroundColor="gray-200"
    //     gridArea="toc"
    //     minHeight="size-1000"
    //     isHidden={{ base: true, L: false }}
    //   />
    //   <View
    //     backgroundColor="gray-200"
    //     gridArea="footer"
    //     minHeight="size-1000"
    //   />
    // </Grid>
  );
}

export default App;
