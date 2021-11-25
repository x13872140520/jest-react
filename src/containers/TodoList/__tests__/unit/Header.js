import { render, screen } from '@testing-library/react';
import Enzyme,{shallow,mount} from 'enzyme';
import toExist,{toHaveProp} from 'jest-enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });


// test('renders learn react link', () => {
//   const div = document.createElement('div')
//   render(<App />,div);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   const container = div.getElementsByClassName('App')
//   expect(container.length).toBe(1)
//   console.log('container',container)
// });
it('render without crashing',()=>{
  const wrapper = mount(<App />)//shallow mount render
  //shallow渲染叫浅渲染，仅仅对当前jsx结构内的顶级组件进行渲染，而不对这些组件的内部子组件进行渲染，因此，它的性能上最快的，大部分情况下，如果不深入组件内部测试，那么可以使用shallow渲染。
  //mount则会进行完整渲染，而且完全依赖DOM API，也就是说mount渲染的结果和浏览器渲染结果说一样的，结合jsdom这个工具，可以对上面提到的有内部子组件实现复杂交互功能的组件进行测试。
  //render也会进行完整渲染，但不依赖DOM API，而是渲染成HTML结构，并利用cheerio实现html节点的选择，它相当于只调用了组件的render方法，得到jsx并转码为html，所以组件的生命周期方法内的逻辑都测试不到，所以render常常只用来测试一些数据（结构）一致性对比的场景
  const container = wrapper.find('[data-test="container"]')
  expect(wrapper).toMatchSnapshot()//如果当前文件的代码比较正式，可以通过toMatchSnapshot来生成一个快照，后面如果有人不小心改动了这个文件，测试会比对快照文件进而报错，如果改动是有意的，在测试阶段输入w进入watch模式后再按u
  console.log(wrapper.debug())//可以进行调试
  //这里使用[data-test="container"]完全是为了解耦，不用担心修改.container类名影响测试。
  expect(container).toExist()//等效于expect(wrapper.find('.App').length).toBe(1)，只不过语法糖省代码，安装jest-enzyme来实现的。
  expect(container).toHaveProp('title','hoho') //等效于expect(container.prop('title')).toBe('hoho')
})