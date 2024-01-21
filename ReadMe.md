
i had to install parcel as 
npm install parcel --ignore-scripts  

had to manually install node@18 as 
brew remove  node
brew install node@18
due to some dependency in parcel making issue (https://github.com/parcel-bundler/parcel/issues/5294)


2. React life cycle is 
separeted into Render and commit phase
(ref: 1:14:00 https://courses.namastedev.com/learn/home/Namaste-React/section/333613/lesson/2352801? ep8, diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
<img width="1372" alt="Screenshot 2024-01-20 at 21 03 43" src="https://github.com/rasi5050/learnReact/assets/12760472/a5eb1ee3-bdc7-4fb8-ac25-05a611d972c2">
consider a parent and 2 children


while mounting components are called as

parent constructor
parent render

child1 constructor
child1 render
child2 constructor
child2 constructor
(these renders are batched togher and reconsiliation is run, diff is found and DOM is updated as batch, since updating DOM is the most expensive operation, its updated in batch)

then 
child1 componentDidMount
child2 componentDidMount
parent componentDidMount
is called in a batch


(ref ep8 1:44:03 https://courses.namastedev.com/learn/home/Namaste-React/section/333613/lesson/2352801? )
then if any api calls are made in componentDidMount, that will be executed,
then setState,


since the state is changed
then in updating phase, render is again called, DOM is updated,
and a following a componentDidUpdate is called.

if the component is to be unmounted,
 then componentWillUnmount will be called just before its unmounted, it also have methods to cleanup stuff which might be left in shadows, like setTimer, wrto. functional component the cleanup will be done as a function returned from useEffect hook.


1/21/24
added implemented single responsibility principle, custom hooks, online/offline status, dynamic loading 

