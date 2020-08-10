# Materialize
## [link](https://materializecss.com/getting-started.html)
## install
1.- npm install materialize-css@next

2.- open "public/index.html" and paste
  
````javascript
// before <body>
//Import Google Icon Font
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

// between <body> tag
//JavaScript at end of body for optimized loading
<script type="text/javascript" src="js/materialize.min.js"></script>
````

3.- import materialize into the sass styles file

````javascript
 //Materialize
  @import "~materialize-css/sass/materialize";
````
4.- open src/index.js and import the main styles file

````javascript
    import '../src/sass/styles.scss';
````

## settings sass variables

````javascript
$colorPrimary: color("light-blue","darken-4");  
````
5.- init components that use materialize with useEffect hook
````javascript
  useEffect(() => { M.AutoInit()}, [])
````