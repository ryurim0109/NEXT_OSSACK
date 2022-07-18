import React from "react";
import styled from "styled-components";

const Text = (props:any) => {
  const {
    children,
    color,
    size,
    bold,
    align,
    margin,
    padding,
    family,
    border,
    _onClick,
    cursor,
    lingH,
    textIndent,
    borderBottom,
  } = props;
  const styles = {
    color,
    size,
    bold,
    align,
    margin,
    padding,
    family,
    border,
    borderBottom,
    cursor,
    lingH,
    textIndent,
  };
  return (
    <ElText {...styles} onClick={_onClick}>
      {children}
    </ElText>
  );
};

Text.defaultProps = {
  children: null,
  color: null,
  size: null,
  bold: false,
  align: null,
  margin: false,
  padding: false,
  border: null,
  textIndent: null,
  lingH: null,
  borderBottom: null,
  _onClick: () => {},
  cursor: null,
};
interface SpanType {
  size:string;
  bold:boolean;
  align:string;
  margin:string;
  padding:string;
  textIndent:string;
  border:string;
  lingH:string;
  cursor:string;
  borderBottom:string;
}
const ElText = styled.span<SpanType>`
  ${(props) => (props.color ? `color:${props.color}` : "color: #111")};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-indent: ${(props) => props.textIndent};
  border: ${(props) => props.border};
  cursor: ${(props) => props.cursor};
  line-height: ${(props) => props.lingH};
  border-bottom: ${(props) => props.borderBottom};
`;

export default Text;
