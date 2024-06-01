import { MarkdownBuilder, render } from "penx";

export async function main() {
  render(new MarkdownBuilder("# Hello world"));
}
