{ pkgs ? import <nixpkgs> {} }:

with pkgs;
mkShell {
	buildInputs = with pkgs; [
		protobuf
		esbuild
		nodejs
	];

	shellHook = ''
		export PATH="$PATH:${builtins.toString ./.}/node_modules/.bin"
	'';
}
