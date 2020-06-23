/* eslint-disable indent */
/* eslint-disable no-tabs*/
/* eslint-disable semi */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
/* eslint-disable object-curly-spacing  */
/* eslint-disable react/jsx-indent  */
/* eslint-disable react/jsx-indent-props  */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unneeded-ternary */

import Select from 'react-select'
import moment from 'moment-timezone'
import sortBy from 'lodash.sortby'
import React from 'react'
import styled from 'styled-components'

export const formatTimezone = (tzString, abbr) =>
	`${tzString} - ${abbr} (${moment.tz(tzString).format('Z')}) `

export const getTimezoneProps = (tzString, now, log = false) => {
	const tz = moment.tz(tzString)
	const tzStringOffset = tz
		.format('Z')
		.replace(':00', '')
		.replace(':30', '.5')
	const x = tzStringOffset === 0 ? 0 : parseInt(tzStringOffset, 10).toFixed(2)
	const abbr = moment.tz.zone(tzString).abbr(now)
	return {
		label: formatTimezone(tzString, abbr),
		value: `${tzString}`,
		abbr,
		time: `${x}`,
		offset: tz._offset,
	}
}

class SelectTimezone extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}

		const now = +new Date()

		const timeZones = moment.tz.names().map((tz) => {
			return getTimezoneProps(tz, now)
		})

		this.timeZones = sortBy(timeZones, [
			(el) => {
				return -el.time
			},
		])
	}
	componentDidMount() {
		const {onChange, value} = this.props
		if (this.props.guess && !value) {
			const guessed = moment.tz.guess()

			onChange && onChange(guessed)
			this.setState({
				selectedValue: guessed,
			})
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.value === undefined) {
			return null
		}
		if (nextProps.value != prevState.selectedValue) {
			return {
				selectedValue: nextProps.value,
			}
		}
		return null
	}

	render() {
		const {
			onChange,
			value: selectedTimezoneValue,
			isClearable = false,
			className,
			...restProps
		} = this.props

		const selectClassName = className ? className : 'react-select-timezone'
		const selected = this.timeZones.find(({value}) => {
			return value === this.state.selectedValue
		})
		return (
			<Shell>
			<Select
				className={selectClassName}
				isClearable={false}
				options={this.timeZones}
				isMulti={false}
				onChange={(option) => {
					if (option) {
						this.setState({selectedValue: option.value})
						onChange && onChange(option.value)
					} else {
						this.setState({selectedValue: null})
						onChange && onChange(null)
					}
				}}
				value={selected}
				{...restProps}
			/>
			</Shell>
		)
	}
}

const Shell = styled.div`
.Select-placeholder,
.Select--single > .Select-control .Select-value {
	&&& { font-size: 15px;
  bottom: 0;
  text-align: left;
  color: #333 !important;
  left: 18px;
  line-height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  right: 0;
  top: 10px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
	white-space: nowrap;
	}
}
.has-value.Select--single > .Select-control .Select-value .Select-value-label,
.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
	color: #73726c !important;
	font-size: 16px;
}
.has-value.Select--single > .Select-control .Select-value a.Select-value-label,
.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {
  cursor: pointer;
  text-decoration: none;
}
.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,
.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {
  color: #007eff;
  outline: none;
  text-decoration: underline;
}
.Select-input {
  height: 34px;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
}
.Select-input > input {
  color: #333;
  position: relative;
	width: 100%;
  background: none transparent;
  border: 0 none;
  box-shadow: none;
  cursor: default;
  display: inline-block;
  font-family: inherit;
	font-size: 16px;
  margin: 0;
  outline: none;
  line-height: 14px;
  /* For IE 8 compatibility */
  padding: 8px 0 12px;
  /* For IE 8 compatibility */
  -webkit-appearance: none;
}
.is-focused .Select-input > input {
  cursor: text;
}
.has-value.is-pseudo-focused .Select-input {
  opacity: 0;
}
.Select-control:not(.is-searchable) > .Select-input {
  outline: none;
}
.Select-loading-zone {
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 16px;
}
.Select-loading {
  -webkit-animation: Select-animation-spin 400ms infinite linear;
  -o-animation: Select-animation-spin 400ms infinite linear;
  animation: Select-animation-spin 400ms infinite linear;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-right-color: #333;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.Select-clear-zone {
  -webkit-animation: Select-animation-fadeIn 200ms;
  -o-animation: Select-animation-fadeIn 200ms;
  animation: Select-animation-fadeIn 200ms;
  color: #999;
  cursor: pointer;
	display: none !important;
  position: relative;
  text-align: center;
  vertical-align: middle;
  width: 17px;
}
.Select-clear-zone:hover {
  color: #D0021B;
}
.Select-clear {
  display: inline-block;
  font-size: 18px;
  line-height: 1;
}
.Select--multi .Select-clear-zone {
  width: 17px;
}
.Select-arrow-zone {
  cursor: pointer;
  display: table-cell;
  position: relative;
  text-align: center;
  vertical-align: middle;
	width: 25px;
	top: -4px;
  padding-right: 5px;
}
.Select-arrow {
  border-color: #999 transparent transparent;
  border-style: solid;
  border-width: 5px 5px 2.5px;
  display: inline-block;
  height: 0;
  width: 0;
}
.Select-arrow,
.Select-arrow-zone:hover > .Select-arrow {
  border-top-color: #666;
}
.Select--multi .Select-multi-value-wrapper {
  display: inline-block;
}
.Select .Select-aria-only {
  display: inline-block;
  height: 1px;
  width: 1px;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  overflow: hidden;
}
@-webkit-keyframes Select-animation-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes Select-animation-fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.Select-menu-outer {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #fff;
  border: 0px solid #c4c2a1;
  border-top-color: #e6e6e6;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  margin-top: -1px;
  max-height: 200px;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
}
.Select-menu {
  max-height: 198px;
  overflow-y: auto;
}
.Select-option {
  box-sizing: border-box;
  background-color: #fff;
  color: #666666;
  cursor: pointer;
	display: block;
	font-size: 15px;
  padding: 8px 10px;
}
.Select-option:last-child {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.Select-option.is-selected {
  background-color: #f5faff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.04);
  color: #73726c;
}
.Select-option.is-focused {
  background-color: #ebf5ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.08);
  color: #73726c;
}
.Select-option.is-disabled {
  color: #cccccc;
  cursor: default;
}
.Select-noresults {
  box-sizing: border-box;
  color: #999999;
  cursor: default;
  display: block;
  padding: 8px 10px;
}
.Select--multi .Select-input {
  vertical-align: middle;
  margin-left: 10px;
  padding: 0;
}
.Select--multi.has-value .Select-input {
  margin-left: 5px;
}
.Select--multi .Select-value {
  background-color: #ebf5ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.08);
  border-radius: 2px;
  border: 1px solid #c2e0ff;
  /* Fallback color for IE 8 */
  border: 1px solid rgba(0, 126, 255, 0.24);
  color: #007eff;
  display: inline-block;
  font-size: 0.9em;
  line-height: 1.4;
  margin-left: 5px;
  margin-top: 5px;
  vertical-align: top;
}
.Select--multi .Select-value-icon,
.Select--multi .Select-value-label {
  display: inline-block;
  vertical-align: middle;
}
.Select--multi .Select-value-label {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  cursor: default;
  padding: 2px 5px;
}
.Select--multi a.Select-value-label {
  color: #007eff;
  cursor: pointer;
  text-decoration: none;
}
.Select--multi a.Select-value-label:hover {
  text-decoration: underline;
}
.Select--multi .Select-value-icon {
  cursor: pointer;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
  border-right: 1px solid #c2e0ff;
  /* Fallback color for IE 8 */
  border-right: 1px solid rgba(0, 126, 255, 0.24);
  padding: 1px 5px 3px;
}
.Select--multi .Select-value-icon:hover,
.Select--multi .Select-value-icon:focus {
  background-color: #efeeda;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 113, 230, 0.08);
  color: #0071e6;
}
.Select--multi .Select-value-icon:active {
  background-color: #c2e0ff;
  /* Fallback color for IE 8 */
  background-color: rgba(0, 126, 255, 0.24);
}
.Select--multi.is-disabled .Select-value {
  background-color: #fcfcfc;
  border: 1px solid #e3e3e3;
  color: #73726c;
}
.Select--multi.is-disabled .Select-value-icon {
  cursor: not-allowed;
  border-right: 1px solid #e3e3e3;
}
.Select--multi.is-disabled .Select-value-icon:hover,
.Select--multi.is-disabled .Select-value-icon:focus,
.Select--multi.is-disabled .Select-value-icon:active {
  background-color: #fcfcfc;
}

.block-color-white .Select-control {
  color: #21170A;
  border-color: #21170A;

  .Select-value span {
    color: #21170A !important;
  }
  .Select-arrow {
    border-top-color: #21170A;
    &:hover {
      border-top-color: #21170A;
    }
  }
}
.blackBorder {
  .Select-placeholder, .Select-control .Select-value {
    padding-left: 0 !important;
  }
 .Select-control {
    /* border: 0; */
    color: #21170A;
    height: 50px;
    background: #fff;
    border: 2px solid black;
  }
  .Select-option {
      background: #f5f7ea;
      &.is-selected {
        background: #f5f7ea;
      }
      &.is-focused {
        background-color: #ebf5ff;
      }
    }
}
.block-color-white .onWhite {
  .Select-placeholder, .Select-control .Select-value {
    padding-left: 0 !important;
  }
 .Select-control {
    color: #21170A;
    height: 50px;
    background: #eeefe9;
  }
  .Select-option {
      background: #f5f7ea;
      &.is-selected {
        background: #f5f7ea;
      }
      &.is-focused {
        background-color: #ebf5ff;
      }
    }
}
.Select-control {
    background-color: transparent;
    border-radius: 0;
    cursor: default;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    height: 36px;
    outline: none;
    overflow: hidden;
    position: relative;
    width: 100%;
    border: 1px solid #aaa;
		padding: 7px;
		margin-top: 9px;

    
    .Select-value {
      top: 5px !important;
      left: 5px !important;

      span {
        color: $white !important;
      }
    }
    .Select-value-label {
      color: $white !important;
    }
  .Select-arrow {
    border-top-color: $white;
    &:hover {
      border-top-color: $white;
    }
  }
}

@keyframes Select-animation-spin {
  to {
    transform: rotate(1turn);
  }
}
@-webkit-keyframes Select-animation-spin {
  to {
    -webkit-transform: rotate(1turn);
  }
}
`

export default SelectTimezone
