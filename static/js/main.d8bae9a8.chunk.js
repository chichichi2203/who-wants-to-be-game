(this["webpackJsonpwho-wants-to-be-game"]=this["webpackJsonpwho-wants-to-be-game"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(7),i=t.n(r),l=(t(14),t(1)),o=t(2),u=t(5),c=t(4),w=t(3),v=t(8),m=t.n(v);var h=function(){return s.a.createElement("div",{className:"wwvce-spotlight"},s.a.createElement("img",{src:m.a,alt:"Who Wants to Be a Visual Composer expert?",className:"wwvce-spotlight-logo"}),s.a.createElement("h1",{className:"wwvce-spotlight-title"},"Who Wants to Be a Visual Composer expert?"))};var p=function(){return s.a.createElement("a",{className:"wwvce-copyright",target:"blank",href:"https://mr.masolov.com/"},"by: MrMasolov")},d=function(e){Object(c.a)(t,e);var a=Object(w.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wwvce-about"},s.a.createElement("div",{className:"wwvce-about-inner"},s.a.createElement("button",{onClick:this.props.onCloseAbout,className:"wwvce-about-close-button"},"X"),s.a.createElement("p",{className:"wwvce-about-inner-paragraph"},"Hello and welcome to a game of \u201cWho Wants to Be a Visual Composer expert?\u201d"),s.a.createElement("p",{className:"wwvce-about-inner-paragraph"},"Once you start you will be presented with 10 random multiple choice questions with a time limit of 6 minutes for each question. Don\u2019t worry, there will be a handy timer available for you to keep track of."),s.a.createElement("p",{className:"wwvce-about-inner-paragraph"},"Obviously with that amount of time you can cheat and look up the answers on the internet, but what is the fun in that? We recommend taking your time and trying to remember or logically deduce the answer!"),s.a.createElement("p",{className:"wwvce-about-inner-paragraph"},"Unfortunately, no lifelines like \u201cAsk the audience\u201d available! Yet\u2026"),s.a.createElement("p",{className:"wwvce-about-inner-paragraph"},"Most of all, have fun and enjoy!")))}}]),t}(s.a.Component),b=function(e){Object(c.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={playerName:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleEnterPress=n.handleEnterPress.bind(Object(u.a)(n)),n}return Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({playerName:e.target.value})}},{key:"handleEnterPress",value:function(e){"Enter"===e.key&&this.props.onStartGame(this.state.playerName)}},{key:"render",value:function(){return s.a.createElement("div",{className:"wwvce-login"},s.a.createElement("div",{className:"wwvce-login-inner"},s.a.createElement("span",{className:"wwvce-login-title"},"Please enter your name:"),s.a.createElement("input",{type:"text",className:"wwvce-login-input",onChange:this.handleChange,onKeyPress:this.handleEnterPress})),s.a.createElement("div",{className:"wwvce-login-inner wwvce-login-inner-controls"},s.a.createElement("button",{onClick:this.props.onStartGame.bind(this,this.state.playerName),className:"wwvce-login-start-game"},"START"),s.a.createElement("button",{onClick:this.props.onOpenAbout,className:"wwvce-login-open-about"},"Learn more...")))}}]),t}(s.a.Component),f=function(e){Object(c.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={minutes:6,seconds:0},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){e.state.seconds>0&&e.setState((function(e){return{seconds:e.seconds-1}})),0===e.state.seconds&&(0===e.state.minutes?clearInterval(e.myInterval):e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})))}),1e3)}},{key:"resetTimer",value:function(){this.setState({minutes:6,seconds:0})}},{key:"render",value:function(){return 0===this.state.minutes&&0===this.state.seconds&&this.props.onGameFail(),s.a.createElement("div",{className:"wwvce-game-timer"},this.state.minutes,":",this.state.seconds<10?"0".concat(this.state.seconds):this.state.seconds)}}]),t}(s.a.Component);var y=function(){return[{question:"When was Visual Composer first published?",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"1st",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"2nd",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"3rd",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"4th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"5th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"6th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"7th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"8th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"9th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"10th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"11th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"12th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"13th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"14th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"15th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"16th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"17th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"18th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"19th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]},{question:"20th",answers:[{answer:"04.08.2017",value:1},{answer:"04.08.2016",value:0},{answer:"17.08.2017",value:0},{answer:"04.07.2017",value:0}]}]},g=function(e){Object(c.a)(t,e);var a=Object(w.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.question.answers.sort((function(){return Math.random()-.5})),s.a.createElement("div",{className:"wwvce-game-question"},s.a.createElement("h2",{className:"wwvce-game-question-title"},this.props.question.question),s.a.createElement("div",{className:"wwvce-game-question-answers"},this.props.question.answers.map((function(a,t){return s.a.createElement("button",{className:"wwvce-game-question-answer",value:a.answer,key:t,onClick:e.props.onClick.bind(e,a.answer)},a.answer)}))))}}]),t}(s.a.Component),E=function(e){Object(c.a)(t,e);var a=Object(w.a)(t);function t(e){var n;for(Object(l.a)(this,t),(n=a.call(this,e)).state={points:0,currentQuestion:0,questionIndexes:[]},n.child=f,n.handleAnswerClick=n.handleAnswerClick.bind(Object(u.a)(n));n.state.questionIndexes.length<10;){var s=Math.floor(20*Math.random())+1;-1===n.state.questionIndexes.indexOf(s)&&n.state.questionIndexes.push(s)}return n}return Object(o.a)(t,[{key:"handleAnswerClick",value:function(e){var a=this;y()[this.state.currentQuestion].answers.forEach((function(t){t.answer===e&&a.setState({points:a.state.points+t.value,currentQuestion:a.state.currentQuestion+1})})),this.refs.child.resetTimer()}},{key:"render",value:function(){return s.a.createElement("div",{className:"wwvce-game"},s.a.createElement(g,{onClick:this.handleAnswerClick,question:y()[this.state.questionIndexes[this.state.currentQuestion]]}),s.a.createElement(f,{ref:"child",onGameFail:this.props.onGameFail}))}}]),t}(s.a.Component),k=function(e){Object(c.a)(t,e);var a=Object(w.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wwvce-fail"},s.a.createElement("div",{className:"wwvce-fail-inner"},s.a.createElement("button",{onClick:this.props.onRestartGame,className:"wwvce-fail-close-button"},"X"),s.a.createElement("p",{className:"wwvce-fail-inner-paragraph"},"Unfortunately you ran out of time!"),s.a.createElement("p",{className:"wwvce-fail-inner-paragraph"},"How could that happened? You had all the time in the world."),s.a.createElement("p",{className:"wwvce-fail-inner-paragraph"},"Want to try again?")))}}]),t}(s.a.Component),N=function(e){Object(c.a)(t,e);var a=Object(w.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={isAboutVisible:!1,isGameStarted:!1,isGameFailed:!1,playerName:"",points:0},n.openAbout=n.openAbout.bind(Object(u.a)(n)),n.startGame=n.startGame.bind(Object(u.a)(n)),n.handleGameFail=n.handleGameFail.bind(Object(u.a)(n)),n.restartGame=n.restartGame.bind(Object(u.a)(n)),n}return Object(o.a)(t,[{key:"openAbout",value:function(){this.setState({isAboutVisible:!this.state.isAboutVisible})}},{key:"startGame",value:function(e){e&&this.setState({isGameStarted:!0,playerName:e})}},{key:"handleGameFail",value:function(){this.setState({isGameStarted:!1,isGameFailed:!0,playerName:"",points:0})}},{key:"restartGame",value:function(){this.setState({isGameStarted:!1,isGameFailed:!1,playerName:"",points:0})}},{key:"render",value:function(){return s.a.createElement("div",{className:"wwvce-container"},!this.state.isGameStarted&&s.a.createElement(h,null),!this.state.isGameStarted&&s.a.createElement(b,{onOpenAbout:this.openAbout,onStartGame:this.startGame}),this.state.isGameStarted&&s.a.createElement(E,{onGameFail:this.handleGameFail}),this.state.isAboutVisible&&s.a.createElement(d,{onCloseAbout:this.openAbout}),this.state.isGameFailed&&s.a.createElement(k,{onRestartGame:this.restartGame}),s.a.createElement(p,null))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t.p+"static/media/VC_horizontal_white text.f3e41a14.png"},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d8bae9a8.chunk.js.map