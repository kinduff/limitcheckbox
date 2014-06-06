# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'limitcheckbox/version'

Gem::Specification.new do |spec|
  spec.name          = "limitcheckbox"
  spec.version       = Limitcheckbox::VERSION
  spec.authors       = ["Kinduff"]
  spec.email         = ["abarcadabra@gmail.com"]
  spec.summary       = "Adds jQuery plugin to limit checkbox selection easy."
  spec.homepage      = "https://github.com/kinduff/limitcheckbox/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0")
  spec.files         = Dir["{lib,vendor}/**/*"] + ["README.md"]
  spec.require_paths = ["lib"]

  spec.add_dependency "railties"

  spec.add_development_dependency "bundler", "~> 1.6"
  spec.add_development_dependency "rake"
end
