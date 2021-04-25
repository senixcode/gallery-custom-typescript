import styled from "styled-components";

export const ContainerGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  object-fit: cover;
  overflow: hidden;
  border-radius: 0em;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 35em;
    max-height: 20em;
    object-fit: cover;
    overflow: hidden;
    border-radius: 0.5em;
  }
`;

export const Masonry = styled.div`
  --columns: 1;
  display: column;
  columns: var(--columns);
  gap: 0;
  & > * {
    break-inside: avoid;
  }
  @supports (grid-template-rows: masonry) {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-rows: masonry;
    grid-auto-flow: dense;
    & > * {
      margin-bottom: 0em;
    }
  }

  @media screen and (min-width: 600px) {
    --gap: 0;
    --columns: 2;
    width: 100%;
    height: 100%;
    display: column;
    columns: var(--columns);
    gap: var(--gap);
  }
`;
