{ pkgs }: {
  deps = [
    pkgs.vimHugeX
    pkgs.unzip
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}