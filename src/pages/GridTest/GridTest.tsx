import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Avatar, Grid, useTheme } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import './styles.css'

const heights = [200, 100, 100, 200, 200, 100, 100, 200, 100, 100];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const posts = [
  {
    id: 1,
    title: 'Post 1',
    size: '1x1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Post 2',
    size: '1x2',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Post 3',
    size: '2x1',
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    title: 'Post 4',
    size: '2x2',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  // Add more posts here with different sizes if needed
];

type Props = {
  title: any;
  content: any;
};

const Post = (props: Props) => (
  <Paper style={{ padding: '20px', minHeight: '100px' }}>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
  </Paper>
);

// const GridMasonryTest = () => {
//   const mainContainerRef = React.useRef<HTMLDivElement>(null);
//   const [width, setWidth] = React.useState(0);
//   const [basisHeightSmall, setBasisHeightSmall] = React.useState(0);
//   const theme = useTheme();

//   React.useEffect(() => {
//     const handleResize = () => {
//       if (mainContainerRef.current) {
//         const gridWidth = mainContainerRef.current.offsetWidth;
//         setWidth(gridWidth)
//         setBasisHeightSmall(((gridWidth - parseInt(theme.spacing(1)) * 2) / 2))
//       }
//     };

//     // Initial calculation on mount
//     handleResize();

//     // Event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Cleanup function to remove event listener
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <Box sx={{ width: 500, minHeight: 393 }}>
//       <Masonry columns={3} spacing={2}>
//         {heights.map((height, index) => (
//           <Item key={index} sx={{ height }}>
//             {index + 1}
//           </Item>
//         ))}
//       </Masonry>
//     </Box>
//   );
// }

// export default GridMasonryTest

// const GridMasonryTest = () => {
//   const mainContainerRef = React.useRef<HTMLDivElement>(null);
//   const [width, setWidth] = React.useState(0);
//   const [basisHeightSmall, setBasisHeightSmall] = React.useState(0);
//   const theme = useTheme();

//   React.useEffect(() => {
//     const handleResize = () => {
//       if (mainContainerRef.current) {
//         const gridWidth = mainContainerRef.current.offsetWidth;
//         setWidth(gridWidth)
//         setBasisHeightSmall(((gridWidth - parseInt(theme.spacing(1)) * 2) / 2))
//       }
//     };

//     // Initial calculation on mount
//     handleResize();

//     // Event listener for window resize
//     window.addEventListener('resize', handleResize);

//     // Cleanup function to remove event listener
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   return (
//     <Box sx={{ flexGrow: 1 }} p={4}>
//       <Grid container spacing={1} ref={mainContainerRef} >
//         {/* First Row */}
//         <Grid item xs={6}>
//           <Paper sx={{ height: `${basisHeightSmall}px`, backgroundColor: 'red' }}>Small Square</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper sx={{ height: `${basisHeightSmall}px`, backgroundColor: 'blue' }}>Small Square</Paper>
//         </Grid>
//          {/* Second Row */}
//         <Grid item xs={12}>
//           <Paper sx={{ height: `${(width - parseInt(theme.spacing(1)))}px`, backgroundColor: 'yellow' }}>Twice Width</Paper>
//         </Grid>
//         {/* Third Row */}
//         <Grid item xs={12}>
//           <Paper sx={{
//             height: `${(width - parseInt(theme.spacing(1)))}px`, backgroundColor: 'green'
//           }}>Big Square</Paper>
//         </Grid>
//         {/* Fourth Row */}
//         <Grid item xs={6}>
//           <Paper sx={{ height: `100%`, backgroundColor: 'pink' }}>Twice Height</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Grid container spacing={1} direction='column'>
//             <Grid item xs={6}>
//               <Paper sx={{ height: `${basisHeightSmall}px`, backgroundColor: 'red' }}>Small Square</Paper>
//             </Grid>
//             <Grid item xs={6}>
//               <Paper sx={{ height: `${basisHeightSmall}px`, backgroundColor: 'blue' }}>Small Square</Paper>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default GridMasonryTest

const GridMasonryTest = () => {
  const mainContainerRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  const [basisHeightSmall, setBasisHeightSmall] = React.useState(0);
  const theme = useTheme();

  React.useEffect(() => {
    const handleResize = () => {
      if (mainContainerRef.current) {
        const gridWidth = mainContainerRef.current.offsetWidth;
        setWidth(gridWidth);
        setBasisHeightSmall((gridWidth - parseInt(theme.spacing(1)) * 2) / 2);
      }
    };

    // Initial calculation on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <Box
      display="grid"
      sx={{
        gridTemplateColumns: 'repeat(auto-fill,minmax(300px, 1fr))',
        gridTemplateRows: 'minmax(100px, auto)',
        margin: '40px',
        gridAutoFlow: 'dense',
      }}
      className="nth-child-styles"
    >
      {/* first */}
      <Box p={2}>
        <Avatar src='/fallback.jpeg' sx={{width:'100px', height:"100px"}} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      {/* second */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      {/* third */}
       <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      {/* fourth */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      {/* fifth */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      
      {/* six */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      
      {/* seven */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

          {/* first */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      {/* second */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      {/* third */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      {/* fourth */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>

      {/* fifth */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>
      
      {/* six */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>
      
      {/* seven */}
      <Box p={2} >
        <Avatar src='/fallback.jpeg' sx={{ width: '100px', height: "100px" }} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>
    </Box>
  );
};

export default GridMasonryTest;
