const $app = document.getElementById('app');
const h = React.createElement;

const Avatar = params =>{
    const src=`https://randomuser.me/api/portraits/men/${params.id}.jpg`;
    return h('img', {src})
};
ReactDOM.render(h(Avatar,{id : 5}), $app)
