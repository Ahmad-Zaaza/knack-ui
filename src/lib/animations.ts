import { keyframes } from "styled-components";

const animations = {
  slideInEnd: {
    appear: keyframes`
    from {
      transform:translateX(var(--animation-transform-end));
    }
    to {
      transform:translateX(0);
    }
    `,
    exit: keyframes`
    from {
      transform:translateX(0);
    }
    to {
      transform:translateX(var(--animation-transform-end));
    }
    `
  }
};

export function getAnimation(
  key: keyof typeof animations,
  mode: "appear" | "exit"
) {
  return animations[key][mode];
}

export const fadeUp = keyframes`
from {
  opacity:0;
  transform:translateY(10px)
}
to {
  opacity:1;
  transform:translateY(0px)
}
`;

export const fade = keyframes`
from {
  opacity:0
}
to {
  opacity:1
}
`;

export const fadeExit = keyframes`
from {
  opacity:1
}
to {
  opacity:0
}
`;

export const slideInEndAppear = keyframes`
from {
  transform:translateX(var(--animation-transform-end));
}
to {
  transform:translateX(0);
}
`;

export const slideInEndExit = keyframes`
from {
  transform:translateX(0);
}
to {
  transform:translateX(var(--animation-transform-end));
}
`;

export const slideInStartAppear = keyframes`
from {
  transform:translateX(var(--animation-transform-start));
}
to {
  transform:translateX(0);
}
`;

export const slideInStartExit = keyframes`
from {
  transform:translateX(0);
}
to {
  transform:translateX(var(--animation-transform-start));
}
`;

export const slideInTopAppear = keyframes`
from {
  transform:translateY(var(--animation-transform-top));
}
to {
  transform:translateY(0);
}
`;

export const slideInTopExit = keyframes`
from {
  transform:translateY(0);
}
to {
  transform:translateY(var(--animation-transform-top));
}
`;

export const slideInBottomAppear = keyframes`
from {
  transform:translateY(var(--animation-transform-bottom));
}
to {
  transform:translateY(0);
}
`;

export const slideInBottomExit = keyframes`
from {
  transform:translateY(0);
}
to {
  transform:translateY(var(--animation-transform-bottom));
}
`;
