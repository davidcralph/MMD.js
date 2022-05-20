class this.MMD.AudioSource  # export to top level
  constructor: (directory, filename, volume) ->
    @directory = directory
    @filename = filename
    @volume = volume

  load: (callback) ->
    if @loaded
      callback()
      return
    @music = new Audio(@directory + '/' + @filename)
    @music.load()
    @music.addEventListener('canplaythrough', () =>
      @loaded = true
      callback()
    )
  
  play: (name) ->
    if !@music then return console.error('no music')
    @music.volume = @volume
    @music.play()

  stop: ->
    if !@music then return console.error('no music')
    @music.pause()
    @music.currentTime = 0
  
  pause: ->
    if !@music then return console.error('no music')
    @music.pause()
  
  resume: ->
    if !@music then return console.error('no music')
    @music.play()
  
  setVolume: (volume) ->
    if !@music then return console.error('no music')
    if volume < 0 then volume = 0
    if volume > 1 then volume = 1
    @music.volume = volume

      