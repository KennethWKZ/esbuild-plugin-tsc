import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { something } from "@some-module/anything"
import { 
    foo, 
    bar, 
    fooBar 
} from 'foo-bar'
import { anotherThing } from   '@another-module/something'

import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

const javaScriptWay = require( '@legacy/registry'  )
const javaScriptDoubleQuotes = require("@single/double")
const makingThisHard =  require (   "@please-install/prettier")


export class AppController {
  constructor(private readonly appService: AppService) {}


  getData() {
    return this.appService.getData();
  }



  ugh() {
     return `Like we need this?`;
  }

  itCanAllBeOneLine() { return 'Seriously?' }

  const what = 'Is this even valid JS?'fn()
  const probablyNot = 'I would hope this isadfasdfdsfa'fn()

  const butThisIsValid = "Stuff all on one line";@deckTheHalls() @Second decoratedObject

}