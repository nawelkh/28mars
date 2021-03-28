import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { makeStyles,withStyles, Card,CardMedia,CardContent,CardActions,Collapse,Divider,MenuItem,InputAdornment,
  Link,List,ListItem,
  Avatar,IconButton,Typography ,Menu,ListItemIcon,ListItemText,TextField,Box } from '@material-ui/core';
import clsx from 'clsx';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import Commentaire from './commentaire'
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import {MdFavorite} from 'react-icons/md'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from 'bootstrap';

                             {/**css de page */}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
      
       
        height:40,
       paddingTop:15,
       paddingBottom:15,
        borderRadius:10,
       
      },

      '& .MuiLink-underlineHover':{
       
        '&:hover':{
        textDecoration:'none',
       }
     

    },
    
     
    },

    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  
   
    hide:{
      display:'none',
       },

       like:{
        marginLeft:10,
        cursor:'Pointer',
          '&:hover':{
          color:'#50b5ff',
         },
        },
        buttonAbn:{
          backgroundColor:'#50b5ff',
          color:'white',
          cursor:'Pointer',
          position: 'relative',
          left: 60,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 15,
          width: 95,
          paddingLeft: 15,
                '&:hover':{
            backgroundColor:'#3883b78a',

         },
        },

  })); 
 
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
   
    
  }))(MenuItem);


  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
     
    },
  
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top:0,
      color: theme.palette.grey[500],
    },
    titre:{
      fontSize:16,
      fontWeight:600,
      marginBottom:10,
    },
  });
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography className={classes.titre} variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
      width: 350,
       
    },
  }))(MuiDialogContent);
  
 
  


                    {/**debut de fonction */}


export default function Stream({post}) {






  const isEmpty = (value) => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
  };


  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();



  useEffect(() => {
      !isEmpty(userData) && setIsLoading(false);
    }, [userData]);





  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [Masquer, setMasquer] = React.useState(true);
  const [isRed, setIsRed] = React.useState(false)
  const [open, setOpen] = React.useState(false);


    
    const MasquerClick = () => {
      
      setMasquer(!Masquer);
    };
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
      
    const modalOpen = () => {
      setOpen(true);
    };
    const modalClose = () => {
      setOpen(false);
    };
    return (
       
  <li key={post.screamId}>

{isLoading ? (

<i >coucou</i>
):   (
<>




<div>
           <Card className={classes.root}  className={clsx( {
                        [classes.hide]: !Masquer,
                      })}>

                                
                

                                 {/*********publication content  ********/}


                <CardContent>
                   {/*********publication header ********/}


                      <Box display='flex'style={{marginBottom:20}}>

                            <Avatar alt="Remy Sharp" src={post.userImage} />

                                      
                            <Typography style={{ fontSize: 17,  flexGrow: 1,marginLeft:20}}> 
                            <a > {post.nom}   {post.prenom}</a> <br/>
                            <small style={{ fontSize: 15, color:'#777d74'
                                }}>{post.createdAt}</small>
                            </Typography>

                            <IconButton onClick={handleClick} 
                        
                        >
                                            <MoreVertIcon  />
                                          </IconButton>
                       </Box>

                                  
                       
                          <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                className={clsx( {
                                  [classes.hide]: !Masquer,
                                })}
                          >


                                 <StyledMenuItem >

                                      <ListItemIcon>
                                        <SaveAltOutlinedIcon fontSize="small" />
                                      </ListItemIcon>

                                      <ListItemText >
                                        <Typography>
                                        Enregistrer 
                                        </Typography>
                                      </ListItemText>
                                   </StyledMenuItem>

                                  <StyledMenuItem 
                                  component="button"
                                  onClick={MasquerClick}>

                                      <ListItemIcon>
                                        <ClearRoundedIcon fontSize="small" />
                                      </ListItemIcon>

                                      <ListItemText >
                                        <Typography>
                                       <a
                                        
                                       > Masquer</a><br/><small>la publication sera masquée seulement de votre fil 
                                          d' actualité</small> 
                                        </Typography>
                                      </ListItemText>
                                  </StyledMenuItem>

                                  
                          </StyledMenu>


                      <Typography variant="body2" color="textSecondary" component="p">
                      {post.body}
                      </Typography>

                </CardContent>

                                                 {/*********publication photo ********/}

              
                
                                                 {/*********publication icons ********/}

                <CardActions disableSpacing>



              
                                  
                                 
                                  
                                  <MdFavorite  style={{fontSize:'x-large' ,marginLeft:5 }}
                                   onClick={() => setIsRed(!isRed)} 
                                  color={isRed ? 'red' : 'black'}
                                
                                  />

                                   <a
                                     className={classes.like}
                                     component="button"
                                     onClick={modalOpen} 
                                    
                                    >
                                      {post.likeCount}</a>

                                
                              {/**mentions J'aime */}

                              <Dialog  onClose={modalClose} aria-labelledby="customized-dialog-title" open={open}>
                                <DialogTitle id="customized-dialog-title" onClose={modalClose}>
                                 Mentions j'aime
                                </DialogTitle >
                                <DialogContent  dividers>
                                  <List>
                                    <ListItem >

                                    <ListItemIcon>

                                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d5.jpg'}  />
                                        
                                        </ListItemIcon>

                                        <Typography style={{fontSize:16,  }}>  <a >Anna Sthesia</a> <br/></Typography>
                                        <a
                                        className={classes.buttonAbn}
                                          component="button"
                                        >S'abonner</a>

                                    </ListItem>


                                    <ListItem >
                                      
                                    <ListItemIcon>

                                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d5.jpg'}  />
                                        
                                        </ListItemIcon>

                                        <Typography style={{fontSize:16,  }}>  <a >Anna Sthesia</a> <br/></Typography>
                                        <a
                                        className={classes.buttonAbn}
                                          component="button"
                                        >S'abonner</a>

                                    </ListItem>
                                    <ListItem >
                                      
                                    <ListItemIcon>

                                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/images/d5.jpg'}  />
                                        
                                        </ListItemIcon>

                                        <Typography style={{fontSize:16,  }}>  <a >Anna Sthesia</a> <br/></Typography>
                                        <a
                                        className={classes.buttonAbn}
                                          component="button"
                                        >Contacter</a>

                                    </ListItem>
                                  </List>
                                </DialogContent>
                              
      </Dialog>



                             






                        <IconButton aria-label="share" className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded, })}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"
                        >

                            <ChatIcon style={{color:'#fcdd00'}} />

                        </IconButton>

                      
                        <IconButton aria-label="share">

                          <ShareIcon style={{color:'#50b5ff'}} />

                        </IconButton>

                                
                </CardActions>
<Divider/>

                      {/*********commentaires ********/}

                <Collapse in={expanded} timeout="auto" unmountOnExit>

                      <CardContent>

                          <TextField 

                                    fullWidth placeholder="ajouter un commentaire" variant="outlined"  
                                    className={classes.root}
                                    style={{ marginBottom:10,}}
                                    InputProps={{
                                      endAdornment: 
                                      <InputAdornment position="end">
                                        
                                            <Link
                                            className={classes.root}
                                             component="button"
                                           >
                                          publier
                                        </Link>

                                    </InputAdornment>,
                                    }}


                          />

                             <Commentaire/>

                      </CardContent>

                </Collapse>

              </Card>
        </div>

</>
        )}
        </li>
    );
};
