import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery } from '@/state/api';
import React from 'react';

type Props = {}

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();
  console.log("🚀 ~ file: Row1.tsx:9 ~ Row1 ~ data:", data)
  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1;