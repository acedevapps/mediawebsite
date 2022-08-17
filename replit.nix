{ pkgs }: {
  deps = [
    pkgs.python310
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}