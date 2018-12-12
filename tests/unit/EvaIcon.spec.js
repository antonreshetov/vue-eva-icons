import { shallowMount } from '@vue/test-utils'
import { EvaIcon } from '../../src/components'

const baseProps = {
  name: 'github',
  animation: 'pulse',
  width: '20',
  height: '20',
  fill: 'limegreen'
}

describe('EvaIcon', () => {
  it('is rendered with props', () => {
    const wrapper = shallowMount(EvaIcon, {
      propsData: baseProps
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.props().name).toBe('github')
    expect(wrapper.props().width).toBe('20')
    expect(wrapper.props().height).toBe('20')
    expect(wrapper.props().fill).toBe('limegreen')
  })
  it('is rendered as github icon', () => {
    const wrapper = shallowMount(EvaIcon, {
      propsData: baseProps
    })
    const svgPath = wrapper.find('path')
    expect(svgPath.attributes()['data-name']).toBe('github')
  })
  it('is rendered with dimensions', () => {
    const wrapper = shallowMount(EvaIcon, {
      propsData: baseProps
    })
    const svg = wrapper.find('svg')
    expect(svg.attributes().width).toBe('20')
    expect(svg.attributes().height).toBe('20')
  })
  it('is rendered with color', () => {
    const wrapper = shallowMount(EvaIcon, {
      propsData: baseProps
    })
    const svg = wrapper.find('svg')
    expect(svg.attributes().fill).toBe('limegreen')
  })
  it('is rendered with animations', () => {
    const wrapper = shallowMount(EvaIcon, {
      propsData: baseProps
    })
    const svg = wrapper.find('svg')
    const animationClass = `eva-icon-hover-${wrapper.props().animation}`
    expect(svg.attributes().class).toContain(animationClass)
  })
  it('click event is emitted', () => {
    const wrapper = shallowMount(EvaIcon)
    const svg = wrapper.find('svg')
    svg.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
